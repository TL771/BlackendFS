import { Controller, Get, Request, Post, UseGuards, Param } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private authService: AuthService,private appService:AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
  @UseGuards(JwtAuthGuard)
  @Get('subjectall')
  getSubject(@Request() req) {
    return this.appService.allSubject();
  }
  @UseGuards(JwtAuthGuard)
  @Get('findclass/:subject_id')
  findClass(@Request() req,@Param('subject_id') subject_id) {
    return this.appService.findClassService(subject_id);
  }
}
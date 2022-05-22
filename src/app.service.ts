import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { InjectConnection } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  async allSubject(): Promise<any> {
    const subject = await this.connection.query(`SELECT * FROM subject`)
    return subject;
  }

  async findClassService(subject_id:string):Promise<any>{
    const cl = await this.connection.query(`SELECT * FROM class WHERE subject_id = '${subject_id}'`)
    return cl;
  }
}

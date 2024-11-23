import { Controller, Post, Get, Req, Param, Query, Header, HttpStatus, HttpCode } from '@nestjs/common';
import { Request } from 'express';


@Controller('/api/users')
export class UserController {

    @Get('/hello')
    @Header("Content-type", "application/json")
    @HttpCode(200)
    getById(): Record<string, string>{
        return {
            data: "Hello Eko"
        }
    }

    // @Get()
    // sayHello(@Query('name') name: string): string {
    //     return `Hello ${name}`
    // }
}

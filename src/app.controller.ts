import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async list() {
    return await this.prisma.notification.findMany();
  }

  @Post()
  async create() {
    return await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content: 'Você recebeu uma notificação!',
        category: 'social',
        recipientId: randomUUID(),
      },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { NotificationRepository } from '@application/repositories/notifications-repository';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationsRepository: NotificationRepository) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { category, content, recipientId } = request;

    const notification = new Notification({
      category,
      content: new Content(content),
      recipientId,
    });

    this.notificationsRepository.create(notification);

    return { notification };
  }
}

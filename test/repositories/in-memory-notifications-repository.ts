import { Notification } from 'src/application/entities/notification';
import { NotificationRepository } from 'src/repositories/notifications-repository';

export class InMemoryNotificationsRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}

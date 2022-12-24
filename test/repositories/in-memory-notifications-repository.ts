import { Notification } from 'src/application/entities/notification';
import { NotificationRepository } from 'src/application/repositories/notifications-repository';

export class InMemoryNotificationsRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async findById(notificationId: string): Promise<Notification | null> {
    return (
      this.notifications.find(
        (notification) => notification.id === notificationId,
      ) || null
    );
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    return this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    );
  }

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async save(notification: Notification): Promise<void> {
    this.notifications.forEach((arrNotification) => {
      if (arrNotification.id === notification.id) {
        arrNotification = notification;
      }

      return arrNotification;
    });
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    return this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    ).length;
  }
}

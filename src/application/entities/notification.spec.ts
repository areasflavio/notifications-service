import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      category: 'category',
      content: new Content('Nova notificação'),
      recipientId: 'recipientId',
      readAt: null,
    });

    expect(notification).toBeTruthy();
  });
});

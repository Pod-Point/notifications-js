import Notification from './Notification';

interface Service {
    /**
     * Publishes the notification.
     */
    publish(message: string, topic: string): Promise<Notification>;
}

export default Service;

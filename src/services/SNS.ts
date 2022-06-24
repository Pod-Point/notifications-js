import * as AWS from 'aws-sdk';
import Service from '../types/Service';
import Notification from '../types/Notification';

class SNS implements Service {
    public config: AWS.SNS.ClientConfiguration = {};

    public constructor(config?: AWS.SNS.ClientConfiguration) {
        this.config = config;
    }

    /**
     * Publishes the notification to AWS SNS.
     */
    public async publish(message: string, topic: string): Promise<Notification> {
        return new AWS.SNS(this.config || {})
            .publish({
                Message: message,
                TopicArn: topic,
            })
            .promise()
            .then((response: AWS.SNS.Types.PublishResponse) => ({
                id: response.MessageId,
                message,
            }));
    }
}

export default SNS;

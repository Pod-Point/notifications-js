import SNS from '../../services/SNS';

jest.mock('aws-sdk');

describe('services/SNS', () => {
    describe('publish', () => {
        it('publishes a notification to AWS SNS', async () => { // tslint:disable-line max-line-length
            const service = new SNS();

            const notification = await service.publish('message', 'arn:aws:sns:region:id:topic');

            expect(notification.id).toBe('someMessageId');
        });
    });
});

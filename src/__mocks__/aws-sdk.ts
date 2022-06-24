/* eslint-disable max-classes-per-file */

export interface SNSResponse {
    MessageId: string;
}

export class SNSRequest {
    public promise: () => Promise<SNSResponse> = jest.fn(() => Promise.resolve({
        MessageId: 'someMessageId',
    }));
}

export class SNS {
    public publish: () => SNSRequest = jest.fn(() => new SNSRequest());
}

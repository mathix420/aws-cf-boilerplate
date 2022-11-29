import type { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';

export async function handler(event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> {
    return {
        body: JSON.stringify('OK'),
        statusCode: 200
    }
}
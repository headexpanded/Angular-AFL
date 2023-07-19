
import { env } from '@environments/env';

export function provideDataUrl(): string {
    return env.testUrl;
}
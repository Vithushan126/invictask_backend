import { Test, TestingModule } from '@nestjs/testing';
import { ActivityServiceController } from './activity-service.controller';
import { ActivityServiceService } from './activity-service.service';

describe('ActivityServiceController', () => {
  let activityServiceController: ActivityServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ActivityServiceController],
      providers: [ActivityServiceService],
    }).compile();

    activityServiceController = app.get<ActivityServiceController>(ActivityServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(activityServiceController.getHello()).toBe('Hello World!');
    });
  });
});

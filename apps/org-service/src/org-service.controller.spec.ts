import { Test, TestingModule } from '@nestjs/testing';
import { OrgServiceController } from './org-service.controller';
import { OrgServiceService } from './org-service.service';

describe('OrgServiceController', () => {
  let orgServiceController: OrgServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OrgServiceController],
      providers: [OrgServiceService],
    }).compile();

    orgServiceController = app.get<OrgServiceController>(OrgServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(orgServiceController.getHello()).toBe('Hello World!');
    });
  });
});

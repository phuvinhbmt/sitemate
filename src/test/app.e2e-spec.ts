import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async() => {
    await app.close();
  })


  it('GET /issue', () => {
    return request(app.getHttpServer())
      .get('/issue')
      .expect(200)
      .expect({});
  });

  it('POST /issue', () => {
    return request(app.getHttpServer())
      .post('/issue')
      .send({
        id: 1,
        title: 'Jira',
        description: '1st issue'
      })
      .expect(201);
  })
});

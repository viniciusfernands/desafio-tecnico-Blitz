import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../src/app';
import service from '../src/services/tasks.services';

chai.use(chaiHttp);

let TaskSinon: sinon.SinonStub;

const mock = {
  task: 'task test',
};

describe('tasks', () => {
  describe('create', () => {
    beforeEach(() => {
      TaskSinon = sinon.stub(service, 'create');
    });

    afterEach(() => {
      TaskSinon.restore();
    });

    it('service returns false', async () => {
      TaskSinon.returns(false);

      const chaiHttpResponse = await chai.request(app).post('/tasks')
        .send(mock);

      expect(chaiHttpResponse.status).to.be.equal(400);
      expect(chaiHttpResponse.body).to.deep.equal({ message: 'Não foi possivel criar nova tarefa' });
    });

    it('service rejects', async () => {
      TaskSinon.rejects();

      const chaiHttpResponse = await chai.request(app).post('/tasks')
        .send(mock);

      expect(chaiHttpResponse.status).to.be.equal(500);
      expect(chaiHttpResponse.body).to.deep.equal({ message: 'Algo deu errado' });
    });

    it('service ok', async () => {
      const mockReturn = {
        id: 1, task: 'task test', status: 'pending', createdAt: '2022-05-19T13:14:52.262Z',
      };

      TaskSinon.returns(mockReturn);

      const chaiHttpOkResponse = await chai.request(app).post('/tasks')
        .send(mock);

      expect(chaiHttpOkResponse.status).to.be.equal(201);
      expect(chaiHttpOkResponse.body).to.deep.equal(mockReturn);
    });
  });

  describe('getAll', () => {
    beforeEach(() => {
      TaskSinon = sinon.stub(service, 'getAll');
    });

    afterEach(() => {
      TaskSinon.restore();
    });

    it('service returns false', async () => {
      TaskSinon.returns(false);

      const chaiHttpResponse = await chai.request(app).get('/tasks')
        .send();

      expect(chaiHttpResponse.status).to.be.equal(400);
      expect(chaiHttpResponse.body).to.deep.equal({ message: 'Não foi possivel listar as tarefas' });
    });
  });

  describe('getById', () => {
    beforeEach(() => {
      TaskSinon = sinon.stub(service, 'update');
    });

    afterEach(() => {
      TaskSinon.restore();
    });

    it('service returns false', async () => {
      TaskSinon.returns(false);

      const chaiHttpResponse = await chai.request(app).get('/tasks/1')
        .send();

      expect(chaiHttpResponse.status).to.be.equal(404);
      expect(chaiHttpResponse.body).to.deep.equal({ message: 'Id não encontrado' });
    });
  });
});

import HttpStatus from 'http-status-codes';

import db from './Database';
import ResultBundleService from './service/ResultBundleService';
import TestResultService from './service/TestResultService';
import ServerService from './service/ServerService';

export default {
  createTestResultEndpoint: async (req, res) => {
    const { server, result } = req.body;
    try {
      const transaction = await db.sequelize.transaction();

      let serverOutput = await ServerService.get(server);
      if (!serverOutput) {
        serverOutput = await ServerService.create(server, transaction);
      }

      let resultBundleOutput = await ResultBundleService.get({
        server_id: serverOutput.get().id,
      });
      console.log(resultBundleOutput);
      if (!resultBundleOutput) {
        resultBundleOutput = await ResultBundleService.create(
          server,
          transaction,
        );
      }

      let testResultOutput = await TestResultService.get({
        result_bundle_id: resultBundleOutput.get().id,
        ...result,
      });
      if (!testResultOutput) {
        testResultOutput = await TestResultService.create(
          {
            result_bundle_id: resultBundleOutput.get().id,
            ...result,
          },
          transaction,
        );
      }

      await transaction.commit();
    } catch (e) {
      if ('status' in e) {
        res.status(e.status).send(e.message);
        return;
      }
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send('Could not create Test Result');
    }

    res.status(HttpStatus.OK).send();
  },
};

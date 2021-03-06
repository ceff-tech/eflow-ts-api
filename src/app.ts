require('dotenv').config();
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';

import { schema } from './graphql/schema';
import * as expressGraphQL from 'express-graphql';

import { router } from './routesCtrl';

const app = express();
app.use(cors());
app.use(logger('tiny'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(router);

app.use(
  '/api/graphql',
  expressGraphQL((req, res) => ({
    schema,
    graphiql: true,
    context: {
      req,
      res,
    },
  }))
);

export { app };

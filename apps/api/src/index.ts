import { TestType3 } from '@repo/typez';
import { createServer } from './server';
import { log, TestType2 } from '@repo/logger';

const port = process.env.PORT || 3001;
const server = createServer();

// console.log('tset');
// const tt: TestType = {
//   next: true,
//   remix: 'dljfsf',
// };
// console.log('🚀 ~ Page ~ tt:', tt.next);

const tt2: TestType2 = {
  next2: true,
  remix2: 'chicago bull',
};
// TestType3;
const ttt: TestType3 = {
  next3: true,
  remix3: 'sdf',
  svolte: true,
};
console.log('🚀 ~ SVOLTE:', ttt.svolte);

server.listen(port, () => {
  log(`api running on ${port}`);
  console.log(tt2);
});

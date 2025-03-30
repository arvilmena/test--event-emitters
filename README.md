```
arvil@Arvils-MacBook-Pro  ~/Downloads/async-event-emitter  bun run src/node-events-emitter.ts
[43:01.311] init test using node events
[43:01.312] > parent function invoked
[43:01.313] >> test1a listener started, pausing for 2 seconds
[43:01.313] >> test1b listener started, pausing for 3 seconds
[43:01.313] >> test2a listener started, pausing for 1 seconds
[43:01.313] >> test2b listener started, pausing for 5 seconds
[43:01.313] >parent function finished
[2.34ms] test
[43:02.315] >> test2a listener finished
[43:03.313] >> test1a listener finished
[43:04.314] >> test1b listener finished
[43:06.314] >> test2b listener finished
 arvil@Arvils-MacBook-Pro  ~/Downloads/async-event-emitter  bun run src/eventemitter2.ts
[43:09.234] init test using eventemitter2
[43:09.235] > parent function invoked
[43:09.235] >> test1a listener started, pausing for 2 seconds
[43:09.235] >> test1b listener started, pausing for 3 seconds
[43:09.236] >> test2a listener started, pausing for 1 seconds
[43:09.236] >> test2b listener started, pausing for 5 seconds
[43:09.236] >parent function finished
[2.38ms] test
[43:10.238] >> test2a listener finished
[43:11.237] >> test1a listener finished
[43:12.236] >> test1b listener finished
[43:14.237] >> test2b listener finished
 arvil@Arvils-MacBook-Pro  ~/Downloads/async-event-emitter  bun run src/eventemitter3.ts
[43:16.644] init test using eventemitter3
[43:16.644] > parent function invoked
[43:16.645] >> test1a listener started, pausing for 2 seconds
[43:16.645] >> test1b listener started, pausing for 3 seconds
[43:16.645] >> test2a listener started, pausing for 1 seconds
[43:16.645] >> test2b listener started, pausing for 5 seconds
[43:16.645] >parent function finished
[2.32ms] test
[43:17.646] >> test2a listener finished
[43:18.646] >> test1a listener finished
[43:19.646] >> test1b listener finished
[43:21.647] >> test2b listener finished
```

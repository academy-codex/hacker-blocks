export default function () {

  this.namespace = 'http://localhost:3000/api';
  this.passthrough('/users');
  // this.get('/users', function () {
  //   return {
  //     "data":
  //     [{
  //       "type": "user",
  //       "id": "72",
  //       "attributes": {
  //         "user-id": 1557,
  //         "name": "Gaurav",
  //         "courses": null
  //       }
  //     },
  //     {
  //       "type": "user",
  //       "id": "103",
  //       "attributes": {
  //         "user-id": 1581,
  //         "name": "Siddhant",
  //         "courses": null
  //       }
  //     }]
  //   };
  // });
  this.passthrough('/users/:user_id');
  //  this.get('/users/:user_id', function () {
  //   return {
  //     data: {
  //       id: 1,
  //       type: "user",
  //       attributes: {
  //         name: "Ankit",
  //         email: "abc@gmail.com"
  //       }
  //     }
  //   };
  // });
 this.passthrough('/contests');
  // this.get('/contests', function () {
  //   return {
  //     meta: {
  //       userCount: 108
  //     },
  //     data: [{
  //       id: 6,
  //       type: "contest",
  //       attributes: {
  //         name: "Blocks Of Code : March Edition",
  //         description: "Public contest for anyone to try their hand on",
  //         start_time: 1488326400,
  //         end_time: 1490918400,
  //         image: "https://bizcircle.att.com/wp-content/uploads/2015/03/buildingblocks_737.jpg",
  //         status: 1,
  //         created_at: "2017-03-28T06:23:07.909Z",
  //         updated_at: null
  //       }
  //     }]
  //   };
  // });


  this.passthrough('/problems');

  // this.get('/problems', function (db, request) {
  //   if (request.queryParams.contest_id && request.queryParams.problem_id) {
  //     return {
  //       data: {
  //         type: "problem",
  //         id: "54",
  //         attributes: {
  //           name: "Hollow Rhombus Pattern",
  //           content: {
  //             name: "Hollow Rhombus Pattern",
  //             constraints: "N <= 20",
  //             description: "Given number of rows N, you need to print a Hollow Rhombus.",
  //             input_format: "Single integer N.",
  //             sample_input: "5",
  //             output_format: "Print pattern.",
  //             sample_output: "    *****\n   *   *\n  *   *\n *   *\n*****"
  //           },
  //           difficulty: 1,
  //           mem_limit: 15,
  //           time_limit: 5,
  //           created_by: 3,
  //           image: "https://i.imgur.com/rpiexu7.png",
  //           tags: null,
  //           status: null,
  //           created_at: "2017-03-28T07:56:24.513Z",
  //           updated_at: null,
  //           'submit-count': 10,
  //           meta: {
  //             "user-count": "6"
  //           },
  //           "user-count": "6"
  //         },
  //         relationships: {
  //           submissions: {
  //             data: [
  //             ]
  //           },
  //           testcases: {

  //           }
  //         }
  //       }
  //     }
  //   }
  //   else {
  //     return {
  //       data: [{
  //         "type": "problem",
  //         id: "20170403",
  //         attributes: {
  //           day: 20170403,
  //           name: "Finquest",
  //           content: {
  //             name: "Finquest",
  //             constraints: "1 <= T <= 10\n1 <= N <= 50000\nAll share prices are between 1 and 100000\n",
  //             description: "Finquest Event hosted by ABC Company is all about share market and who can make the best profit out of it.\nImagine that your algorithms have become so good at predicting the market that you now know what the share price of Das Motors Inc. (DM) will be for the next N days.\nEach day, you can either buy one share of DM, sell any number of shares of DM that you own, or not make any transaction at all. What is the maximum profit you can obtain with an optimum trading strategy?\n",
  //             explanation: "For the first case, you cannot obtain any profit because the share price never rises. \nFor the second case, you can buy one share on the first two days, and sell both of them on the third day. \nFor the third case, you can buy one share on day 1, sell one on day 2, buy one share on day 3, and sell one share on day 4.\n",
  //             input_format: "The first line contains the number of test cases T. T test cases follow:\nThe first line of each test case contains a number N. The next line contains N integers, denoting the predicted price of DM shares for the next N days.\n",
  //             sample_input: "3\n3\n5 3 2\n3\n1 2 100\n4\n1 3 1 2\n",
  //             output_format: "Output T lines, containing the maximum profit which can be obtained for the corresponding test case.",
  //             sample_output: "0\n197\n3\n"
  //           },
  //           difficulty: 2,
  //           mem_limit: 512,
  //           time_limit: 2,
  //           image: "httpS://i.imgur.com/IbOsN5j.png",
  //           'submit-count': 12
  //         },
  //         relationships: {
  //           submissions: {

  //           },
  //           testcases: {

  //           }
  //         }
  //       }]
  //     }

  //   }
  // });
  this.passthrough('/problems/:problem_id');
  
  // this.get('/problems/:problem_id', function () {
  //   return {
  //     data: {
  //       id:1,
  //       type: "problem",
  //       attributes: {
  //         name: "The Great Coding Blocks Conundrum",
  //         content: lorem_ipseum
  //       }
  //     }
  //   };
  // });

  this.passthrough('/submissions');
  // this.get('/submissions', function (db, request) {
  //   if (request.queryParams.contest && request.queryParams.leaderboard) {
  //     return {
  //       data: [{
  //         type: "submission",
  //         id: "78",
  //         attributes: {
  //           "user-id": 1490,
  //           score: 325,
  //           "user-name": "Nishant Bhargava"
  //         }
  //       },
  //       {
  //         type: "submission",
  //         id: "262",
  //         attributes: {
  //           "user-id": 1015,
  //           score: 200,
  //           "user-name": "Kamaldeep Singh"
  //         }
  //       },
  //       {
  //         type: "submission",
  //         id: "952",
  //         attributes: {
  //           "user-id": 1768,
  //           score: 200,
  //           "user-name": "Rishab Arora"
  //         }
  //       },]
  //     };
  //   }
  //   else {
  //     return {
  //       data: [{
  //         id: 1,
  //         type: "submission",
  //         attributes: {
  //           "user-name": "Nishant Bhargava",
  //           "problem-name": "Playing with number system",
  //           submit_at: 476254654,
  //           language: "c",
  //           score: 100.0,
  //         }
  //       }, {
  //         id: 2,
  //         type: "submission",
  //         attributes: {
  //           "problem-name": "Just another Series !",
  //           "user-name": "Amit Nardia",
  //           language: "cpp",
  //           score: 90.0,
  //         }
  //       }]
  //     };
  //   }
  // });

  this.passthrough('/leaderboard');
  this.passthrough('/submissions/submissionCount');
  // this.get('/submissions/submissionCount', function () {
  //   return [{ count: 19 }];
  // });

  this.passthrough('/users/me');
  
  // this.get('/users/me', function () {
  //   return {
  //     data: {
  //       id: 1,
  //       type: "user",
  //       attributes: {
  //         'user_id':'1015',
  //         name: "Ankit",
  //         'roll-number': "1234",
  //         email: "ankit@gmail.com"
  //       }
  //     }
  //   }
  // });
 this.passthrough('http://localhost:3000/api/login');
//this.post('http://localhost:3000/api/login',function(){
//   return [{user_id:1015,access_token:"2039ec223014abf2d11fa3b6624a32d6"}];
// });

  this.passthrough('/contests/:contest_id');
  // this.get('/contests/:contest_id', function () {
  //   return {
  //     data: {
  //       type: "contest",
  //       id: 6,
  //       attributes: {
  //         name: "Blocks Of Code : March Edition",
  //         description: "Public contest for anyone to try their hand on",
  //         start_time: 1488326400,
  //         end_time: 1490918400,
  //         image: "https://bizcircle.att.com/wp-content/uploads/2015/03/buildingblocks_737.jpg",
  //         status: 1,
  //         created_at: "2017-03-28T06:23:07.909Z",
  //         updated_at: null
  //       },
  //       relationships: {
  //         problems: {
  //           data: [
  //             {
  //               type: "problem",
  //               id: 54
  //             }
  //           ]
  //         }
  //       }
  //     },
  //     included: [
  //       {
  //         type: "problem",
  //         id: 54,
  //         attributes: {
  //           name: "Hollow Rhombus Pattern",
  //           content: {
  //             name: "Hollow Rhombus Pattern",
  //             constraints: "N <= 20",
  //             description: "Given number of rows N, you have to print a Hollow Rhombus.",
  //             input_format: "Single integer N.",
  //             sample_input: "5",
  //             output_format: "Print pattern.",
  //             sample_output: "    *****\n   *   *\n  *   *\n *   *\n*****"
  //           },
  //           difficulty: 1,
  //           mem_limit: 15,
  //           time_limit: 5,
  //           created_by: 3,
  //           image: "https://i.imgur.com/rpiexu7.png",
  //           tags: null,
  //           status: null,
  //           created_at: "2017-03-28T07:56:24.513Z",
  //           updated_at: null,
  //           'submit-count':12,
  //           cproblems: {
  //             created_at: "2017-04-09T05:53:05.220Z",
  //             updated_at: "2017-04-09T05:53:05.220Z",
  //             p_id: 54,
  //             c_id: 6
  //           }
  //         },
  //         relationships: {
  //           submissions: {

  //           },
  //           testcases: {

  //           }
  //         }
  //       }
  //     ]
  //   }
  // });

  this.passthrough('/submissions/:submission_id');
  // this.get('/submissions/:submission_id', function () {
  //   return {
  //     data: {
  //       type: "submission",
  //       id: 561,
  //       attributes:
  //       {
  //         "user-id": 317,
  //         source: "I2luY2x1ZGUgPHN0ZGlvLmg+CmludCBtYWluKCkgewogICAgY291dCA8PCAiSGVsbG8gQ29kaW5nIEJsb2NrcyAhIjsKICAgIHJldHVybiAwOwogICAgCn0K",
  //         submit_at: 1489292279,
  //         language: "c",
  //         score: 100,
  //         result: -1,
  //         problem_id: 45,
  //         c_id: null,
  //         p_id: null,
  //         created_at: null,
  //         updated_at: null
  //       }
  //     }
  //   }
  // });



  this.passthrough('/problems/weekly/:problem_id');
  this.passthrough('/dailycbs/:problem_id');

  this.passthrough('/dailycbs');

  // this.get('/dailycbs/:problem_id', function () {
  //   return {
  //     data: {
  //       type: "problem",
  //       id: 20170403,
  //       attributes: {
  //         day: 20170403,
  //         name: "Finquest",
  //         content: {
  //           name: "Finquest",
  //           constraints: "1 <= T <= 10\n1 <= N <= 50000\nAll share prices are between 1 and 100000\n",
  //           description: "Finquest Event hosted by ABC Company is all about share market and who can make the best profit out of it.\nImagine that your algorithms have become so good at predicting the market that you now know what the share price of Das Motors Inc. (DM) will be for the next N days.\nEach day, you can either buy one share of DM, sell any number of shares of DM that you own, or not make any transaction at all. What is the maximum profit you can obtain with an optimum trading strategy?\n",
  //           explanation: "For the first case, you cannot obtain any profit because the share price never rises. \nFor the second case, you can buy one share on the first two days, and sell both of them on the third day. \nFor the third case, you can buy one share on day 1, sell one on day 2, buy one share on day 3, and sell one share on day 4.\n",
  //           input_format: "The first line contains the number of test cases T. T test cases follow:\nThe first line of each test case contains a number N. The next line contains N integers, denoting the predicted price of DM shares for the next N days.\n",
  //           sample_input: "3\n3\n5 3 2\n3\n1 2 100\n4\n1 3 1 2\n",
  //           output_format: "Output T lines, containing the maximum profit which can be obtained for the corresponding test case.",
  //           sample_output: "0\n197\n3\n"
  //         },
  //         difficulty: 2,
  //         mem_limit: 512,
  //         time_limit: 2,
  //         image: "httpS://i.imgur.com/IbOsN5j.png",
  //         'submit_count': 12
  //       },
  //       relationships: {
  //         submissions: {

  //         },
  //         testcases: {

  //         }
  //       }
  //     }
  //   }

  // });
}

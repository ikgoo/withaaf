var express = require('express');
var router = express.Router();

var app = express();

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  // ssl: true,
});

client.connect();

router.get('/', (req,res,next) => {
  res.render('aafacc', {
    title:'AAF 장비'
  });
});

router.get('/:id', (req,res,next) => {
  var SearchType = req.query.searchType;
  if (SearchType === 'name') {
    var Search = req.query.searchText;
    var CurrentPage = req.params.id;
    var SearchLimit = req.query.limit;
    if (SearchLimit === undefined) {
      SearchLimit = 0;
    };
    console.log(SearchLimit)
    var QueryString = "SELECT *, count(*) over() as totalcount FROM aquafeq.aquafacc where accname LIKE $1 and cast(acclimit as INTEGER) >= $2 or acclimit is null  ORDER BY acclimit,accid asc limit 10 offset (($3- 1)*10);"
    client.query(QueryString, ['%' + Search + '%', SearchLimit, CurrentPage], (err, response) => {
      console.log('서치리밋' + SearchLimit);
      if(typeof(response.rows[0]) !== "object") {
        var TotalCount = 1;
      } else {
        var TotalCount = response.rows[0].totalcount;
      }
      console.log(TotalCount)
      if (TotalCount === undefined) {
        TotalCount = 1;
      }
      console.log('토탈 카운트 ' + TotalCount)
      var DataCountInPage = 10;
      var PageSize = 10;
      var TotalPage = parseInt(TotalCount / DataCountInPage,10);
      if (TotalCount % DataCountInPage > 0) {
        TotalPage++;
      };

      console.log('토탈 페이지' + TotalPage);
      if (TotalPage < CurrentPage) {
        CurrentPage = TotalPage;
      };
      var StartPage = parseInt(((CurrentPage - 1)/10),10) *10 +1;
      console.log('스타트페이지' + StartPage);

      var EndPage = StartPage + DataCountInPage -1;
      if (EndPage > TotalPage) {
        EndPage = TotalPage;
      };
      console.log('엔드페이지'+ EndPage);

      res.render('aafacc', {
        title: 'AAF 장비',
        data: response.rows,
        CurrentPage: CurrentPage,
        PageSize: PageSize,
        StartPage: StartPage,
        EndPage: EndPage,
        TotalPage: TotalPage,
        SearchType: SearchType,
        Search: Search,
        SearchLimit: SearchLimit
      });
    });
  } else if (SearchType === 'feat') {
    var Search = req.query.searchText;
    var CurrentPage = req.params.id
    var SearchLimit = req.query.limit;
    if (SearchLimit === undefined) {
      SearchLimit = 0;
    };
    var QueryString = "SELECT *, count(*) over() as totalcount FROM aquafeq.aquafacc where accfeat LIKE $1 and cast(acclimit as INTEGER) >= $2 or acclimit is null  ORDER BY acclimit asc limit 10 offset (($3- 1)*10);"
    client.query(QueryString, ['%' + Search + '%', SearchLimit, CurrentPage], (err, response) => {
      if(typeof(response.rows[0]) !== "object") {
        var TotalCount = 1;
      } else {
        var TotalCount = response.rows[0].totalcount;
      }
      console.log(TotalCount)
      var DataCountInPage = 10;
      var PageSize = 10;
      var TotalPage = parseInt(TotalCount / DataCountInPage,10);
      if (TotalCount % DataCountInPage > 0) {
        TotalPage++;
      };
      if (TotalPage < CurrentPage) {
        CurrentPage = TotalPage;
      };
      var StartPage = parseInt(((CurrentPage - 1)/10),10) *10 +1;
      var EndPage = StartPage + DataCountInPage -1;
      if (EndPage > TotalPage) {
        EndPage = TotalPage;
      };
      res.render('aafacc', {
        title: 'AAF 장비',
        data: response.rows,
        CurrentPage: CurrentPage,
        PageSize: PageSize,
        StartPage: StartPage,
        EndPage: EndPage,
        TotalPage:TotalPage,
        SearchType: SearchType,
        Search: Search,
        SearchLimit: SearchLimit
      });
    });
  } else if (SearchType === 'property') {
    var Search = req.query.searchText;
    var CurrentPage = req.params.id
    var SearchLimit = req.query.limit;
    if (SearchLimit === undefined) {
      SearchLimit = 0;
    };
    var QueryString = "SELECT *, count(*) over() as totalcount FROM aquafeq.aquafacc where accproperty LIKE $1 and cast(acclimit as INTEGER) >= $2 or acclimit is null  ORDER BY acclimit asc limit 10 offset (($3- 1)*10);"
    client.query(QueryString, ['%' + Search + '%', SearchLimit, CurrentPage], (err, response) => {
      if(typeof(response.rows[0]) !== "object") {
        var TotalCount = 1;
      } else {
        var TotalCount = response.rows[0].totalcount;
      }
      console.log(TotalCount)
      var DataCountInPage = 10;
      var PageSize = 10;
      var TotalPage = parseInt(TotalCount / DataCountInPage,10);
      if (TotalCount % DataCountInPage > 0) {
        TotalPage++;
      };
      if (TotalPage < CurrentPage) {
        CurrentPage = TotalPage;
      };
      var StartPage = parseInt(((CurrentPage - 1)/10),10) *10 +1;
      var EndPage = StartPage + DataCountInPage -1;
      if (EndPage > TotalPage) {
        EndPage = TotalPage;
      };
      res.render('aafacc', {
        title: 'AAF 장비',
        data: response.rows,
        CurrentPage: CurrentPage,
        PageSize: PageSize,
        StartPage: StartPage,
        EndPage: EndPage,
        TotalPage:TotalPage,
        SearchType: SearchType,
        Search: Search,
        SearchLimit: SearchLimit
      });
    });
  } else if (SearchType === 'custom') {
    var Search = req.query.searchText;
    var CurrentPage = req.params.id
    var SearchLimit = req.query.limit;
    if (SearchLimit === undefined) {
      SearchLimit = 0;
    };
    var QueryString = "SELECT *, count(*) over() as totalcount FROM aquafeq.aquafacc where acccustom LIKE $1 and cast(acclimit as INTEGER) >= $2 or acclimit is null  ORDER BY acclimit asc limit 10 offset (($3- 1)*10);"
    client.query(QueryString, ['%' + Search + '%', SearchLimit, CurrentPage], (err, response) => {
      if(typeof(response.rows[0]) !== "object") {
        var TotalCount = 1;
      } else {
        var TotalCount = response.rows[0].totalcount;
      }
      console.log(TotalCount)
      var DataCountInPage = 10;
      var PageSize = 10;
      var TotalPage = parseInt(TotalCount / DataCountInPage,10);
      if (TotalCount % DataCountInPage > 0) {
        TotalPage++;
      };
      if (TotalPage < CurrentPage) {
        CurrentPage = TotalPage;
      };
      var StartPage = parseInt(((CurrentPage - 1)/10),10) *10 +1;
      var EndPage = StartPage + DataCountInPage -1;
      if (EndPage > TotalPage) {
        EndPage = TotalPage;
      };
      res.render('aafacc', {
        title: 'AAF 장비',
        data: response.rows,
        CurrentPage: CurrentPage,
        PageSize: PageSize,
        StartPage: StartPage,
        EndPage: EndPage,
        TotalPage:TotalPage,
        SearchType: SearchType,
        Search: Search,
        SearchLimit: SearchLimit
      });
    });
  } else {
    res.redirect('/aafacc');
  };
})


//
/*var mysql = require('mysql');
var connection = mysql.createConnection(require('../config/dbconfig.js'));

connection.connect(function(err){
  if(err){
    console.log(err);
    return;
  }
  console.log('mysql connect completed')
} );
*/

/* sql 테이블 랜더링 */
router.get('/', (req, res, next) => {
  if(req.query.searchType === 'name') {
    var searchingtext = req.query.searchText
    var sql = 'SELECT * FROM aquafacc WHERE accname LIKE ?' ;
    connection.query(sql, "%" + searchingtext + "%",function(err, results, field) {
      res.render('aafacc', {
        title: '악세사리',
        varaquafacc: results
      });
    });
  } else if (req.query.searchType === 'feat'){
    var searchingtext =req.query.searchText
    var sql = 'SELECT * FROM aquafacc WHERE accfeat LIKE ?';
    connection.query(sql, "%" + searchingtext + "%", function(err, results, field) {
      res.render('aafacc', {
        title: '악세사리',
        varaquafacc: results
      });
    });
  } else if(req.query.searchType === 'property') {
    var searchingtext =req.query.searchText
    var sql = 'SELECT * FROM aquafacc WHERE accproperty LIKE ?';
    connection.query(sql, "%" + searchingtext + "%", function(err, results, field) {
      console.log('aquafacc 커스텀 검색');
      res.render('aafacc', {
        title: '악세사리',
        varaquafacc: results
      });
    });
  } else if(req.query.searchType === 'custom') {
    var searchingtext =req.query.searchText
    var sql = 'SELECT * FROM aquafacc WHERE acccustom LIKE ?';
    connection.query(sql, "%" + searchingtext + "%", function(err, results, field) {
      console.log('aquafacc 커스텀 검색');
      res.render('aafacc', {
        title: '악세사리',
        varaquafacc: results
      });
    });
  } else {
    res.render('aafaccmain', {
      title: '악세사리',
    });
  }

});







module.exports = router;

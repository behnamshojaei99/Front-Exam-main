import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {Button,Badge} from 'antd' 

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: 'میانترم', customerId: '۱۳۹۹/۹/۲۰', amount: "پیش رو" , during:" ۸:۰۰ الی ۱۱:۰۰"},
      { date: 'کوییز ۲۵ آبان', customerId: '۱۳۹۹/۸/۲۵', amount: "برگزار شده" , during:" ۸:۰۰ الی ۱۱:۰۰" },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const headcells=props.headcells
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="right" component="th" scope="row" style={{fontFamily:"Samim"}}>
          {row.name}
        </TableCell>
        <TableCell align="right" style={{fontFamily:"Samim"}}>{row.calories}</TableCell>
        {/* <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography  style={{flexDirection :"unset",
                        fontWeight:"600",
                        fontSize:"16px" ,
                        fontFamily:"Samim"}} align="right" variant="h6" gutterBottom component="div">
                    لیست آزمون ها
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                  {
            headcells.map((headcell) => ( <
                TableCell key = { headcell.id }
                align = "right"
                style={{flexDirection :"unset",
                fontWeight:"600",
                fontSize:"13px",
                textShadow:" 1px 1px 2px silver, 0 0 25px cyan",
                fontFamily:"Samim"
            }}
                
               
                // padding = { headcell.disablePadding ? 'none' : 'default' }
                // sortDirection = { orderBy === headcell.id ? order : false }
                 ><span>{headcell.label}</span></
                                 TableCell>
             ) )}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell align="right" component="th" scope="row"  style={{fontFamily:"Samim"}}>
                        {historyRow.date}
                      </TableCell>
                      <TableCell align="right" style={{fontFamily:"Samim"}}>{historyRow.customerId}</TableCell>
                      <TableCell align="right" style={{fontFamily:"Samim"}}>{historyRow.amount}</TableCell>
                      <TableCell align="right" style={{fontFamily:"Samim"}}>{historyRow.during}</TableCell>
                      <TableCell align="right" style={{fontFamily:"Samim"}}>
                        
                      <Badge count={"۳۴"} showZero >
                        <Button type="primary" style={{borderRadius:"15px", fontSize:"10px" }}>مشاهده پاسخ ها </Button>
                      </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('الگوریتم', 1234),
  createData('کامپایلر',4321),
  createData('هوش مصنوعی', 1234,)
];

const CollapsibleTable = props=> {
    const mainHeadcells=props.mainHeadcells
    const headcells=props.headcells

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell /> {
            mainHeadcells.map(( mainHeadcell) => ( <
                TableCell key = {  mainHeadcell.id }
                align = "right"
                
                style={{flexDirection :"unset",
                fontWeight:"600",
                fontSize:"16px",
                textShadow:" 1px 1px 2px silver, 0 0 25px cyan",
                fontFamily:"Samim"
            }}
                // padding = { headcell.disablePadding ? 'none' : 'default' }
                // sortDirection = { orderBy === headcell.id ? order : false }
                 ><span>{ mainHeadcell.label}</span>
                 </
                 TableCell>
             ) )}
          </TableRow>
        </TableHead>
        <TableBody  >
          {rows.map((row) => (
            <Row headcells={headcells} key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default CollapsibleTable
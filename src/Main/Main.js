import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CriaProjeto from '../Projeto/CriaProjeto';
import CriaAtividade from '../Projeto/CriaAtividade';

export default function Main() {
  //<CriaProjeto />
  
  return (
    <React.Fragment>
      <CssBaseline />
      
      <CriaAtividade/>
    </React.Fragment>
  );
}
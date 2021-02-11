import React, { Fragment, useState } from 'react';
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
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';


export default function CriaProjeto() {
    const [nomeProjeto, setNomeProjeto] = useState();
    const handleNomeProjeto = (event) => {
        setNomeProjeto(event.target.value);
    };

    const [dataInicio, handleDataInicio] = useState(new Date());
    const [dataFim, handleDataFim] = useState(new Date());

    return (
        <Container>
            <Grid container xs={3} direction="row">
                <Box pt={2} pb={2}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Nome do Projeto"
                        value={nomeProjeto}
                        onChange={handleNomeProjeto}
                        placeholder="Projeto"
                        variant="outlined"
                        size="small"
                    />
                </Box>
                <Box pt={2} pb={2}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                            disableToolbar
                            disablePast
                            variant="inline"
                            label="Data de inicio"
                            inputVariant="outlined"
                            value={dataInicio}
                            onChange={handleDataInicio}
                            size="small"
                        />
                    </MuiPickersUtilsProvider>
                </Box>
                <Box pt={2} pb={2}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                            disableToolbar
                            disablePast
                            variant="inline"
                            minDate={dataInicio}
                            minDateMessage="Data deve ser a mesma de inicio ou alem"
                            label="Data de fim"
                            inputVariant="outlined"
                            value={dataFim}
                            onChange={handleDataFim}
                            size="small"
                        />
                    </MuiPickersUtilsProvider>
                </Box>
                
            </Grid>
            <Box pt={2} pb={2} >
                <Button variant="contained" color="primary">
                    Criar Projeto
                </Button>
            </Box>
        </Container>
    );
}
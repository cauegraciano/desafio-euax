import React, { Component, Fragment, useState } from 'react';
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
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import _ from "lodash";
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';


function Row(props) {
    const {row} = props;
    const i = props.i;
    console.log('props ', props);
    //console.log(row.idAtividade);
    console.log(row, 'contador ', i);
    
    return(
        <TableRow>
            <TableCell>{row[i].idAtividade}</TableCell>
            <TableCell>{row[i].idProjeto}</TableCell>
            <TableCell>{row.nomeAtividade}</TableCell>
            <TableCell>{_.toString(row.dtFim)}</TableCell>
            <TableCell>{row.finalizada}</TableCell>
        </TableRow>
    )
}

class CriaAtividade extends Component {
    constructor(props) {
        super(props);

        this.adicionaAtividade=this.adicionaAtividade.bind(this);
        this.handleDataInicio=this.handleDataInicio.bind(this);
        this.handleDataFim=this.handleDataFim.bind(this);
        this.state = {
            rows: [ ],
            nomeAtividade: '',
            dtInicio: null,
            dtFim: null,

        };
    }

    

    adicionaAtividade = (idAtividade, idProjeto, nomeAtividade, dtInicio, dtFim, finalizada) => {
        //logica do idAtividade
        //idProjeto ok
        //nomeAtividade e datas recebe
        //Finalizado checkbox
        
        let rows = this.state.rows;

        let newRow = [];
        newRow.push({
            idAtividade, 
            idProjeto,
            nomeAtividade,
            dtInicio,
            dtFim,
            finalizada,
        });
        console.log(newRow);

        if (_.some(rows), {'idAtividade': idAtividade}) {
            rows.push(newRow);
            this.setState({
                rows: rows
            });
            console.log(_.isObject(rows));
        }
        
        console.log(rows);
        //return rows;
        
    }


    //const [nomeAtividade, setNomeAtividade] = useState();
    handleNomeAtividade = (event) => {
        this.setState({nomeAtividade: event.target.value});
    };
    handleDataInicio = (event) => {
        
        console.log(event);
        this.setState({dtInicio: event});
    };
    handleDataFim = (event) => {
        this.setState({dtFim: event});
    };
    /*
    
    const [dtInicio, handleDataInicio] = useState(new Date());
    const [dtFim, handleDataFim] = useState(new Date());
    */
    // Recebe dados do projeto pelo props?

    render() {
        return (
            <Container maxWidth="md" >
                <Grid sm={12} xs={12} direction="row">
                    <Box pt={2} pb={2} >
                        <TableContainer component={Paper}>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID Projeto</TableCell>
                                        <TableCell>Nome Projeto</TableCell>
                                        <TableCell>Data inicio</TableCell>
                                        <TableCell>Data Fim</TableCell>
                                        <TableCell>% Completo</TableCell>
                                        <TableCell>Atrasado</TableCell>
                                    </TableRow>
                                </TableHead>   
                                <TableBody>
                                    <TableCell>1</TableCell>
                                    <TableCell>Projeto 1</TableCell>
                                    <TableCell>01/01/2019</TableCell>
                                    <TableCell>31/01/2019</TableCell>
                                    <TableCell>50%</TableCell>
                                    <TableCell>Nao</TableCell>
                                </TableBody>                     
                            </Table>
                        </TableContainer>
                    </Box>
                </Grid>
                <Grid sm={12} xs={12} direction="row">
                    <Paper>
                        <Box pt={2} pb={2} pl={2} pr={2}>
                            <TextField
                                required
                                fullWidth
                                id="outlined-required"
                                label="Nome da Atividade"
                                value={this.state.nomeAtividade}
                                onChange={this.handleNomeAtividade}
                                placeholder="Atividade"
                                variant="outlined"
                                size="small"
                            />
                        </Box>
                        <Box pt={2} pb={2} pl={2} pr={2}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <DatePicker
                                    disableToolbar
                                    disablePast
                                    fullWidth
                                    variant="inline"
                                    label="Data de inicio"
                                    inputVariant="outlined"
                                    value={this.state.dtInicio}
                                    onChange={this.handleDataInicio}
                                    size="small"
                                />
                            </MuiPickersUtilsProvider>
                        </Box>
                        <Box pt={2} pb={2} pl={2} pr={2}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <DatePicker
                                    disableToolbar
                                    disablePast
                                    fullWidth
                                    variant="inline"
                                    minDate={this.state.dtInicio}
                                    minDateMessage="Data deve ser a mesma de inicio ou alem"
                                    label="Data de fim"
                                    inputVariant="outlined"
                                    value={this.state.dtFim}
                                    onChange={this.handleDataFim}
                                    size="small"
                                />
                            </MuiPickersUtilsProvider>
                        </Box>
                        <Box pt={2} pb={2} pl={2} pr={2}>
                            <form onClick={this.adicionaAtividade}>
                                <Button 
                                    type="submit"
                                    disabled={ !this.state.nomeAtividade }
                                    variant="contained" 
                                    color="primary" 
                                    fullWidth size="small" 
                                    endIcon={<AddIcon />}
                                >
                                    Adiciona Atividade
                                </Button>
                            </form>
                        </Box>
                    </Paper>
                </Grid>

                <Grid sm={12} xs={12} direction="row">
                    <Box pt={2} pb={2} >
                        <TableContainer component={Paper}>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID Atividade</TableCell>
                                        <TableCell>ID Projeto</TableCell>
                                        <TableCell>Nome Atividade</TableCell>
                                        <TableCell>Data inicio</TableCell>
                                        <TableCell>Data Fim</TableCell>
                                        <TableCell>Finalizada?</TableCell>
                                    </TableRow>
                                </TableHead>   
                                <TableBody>
                                    {_.map(this.state.rows,(row,i) => 
                                        <Row key={row.idAtividade} row={row} i={i} />
                                    )}
                                </TableBody>                     
                            </Table>
                        </TableContainer>
                    </Box>
                </Grid>
            </Container>
        );
    }    
}

export default CriaAtividade;
import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import SalaInterface from "../interfaces/Sala.interface";
import SalaService from "../services/salaService";
import { FilmeInterface } from "../interfaces/Filme.interface";
import FilmeService from "../services/filmeService";
import SessaoInterface from "../interfaces/Sessoes.interface";
import SessaoService from "../services/sessaoService";
import Sessao from "../classes/Sessao";
import TableSessoes from "../components/TableSessoes";

export default function CadastrarSessoes() {
  const salaService = new SalaService();
  const arraySalas: SalaInterface[] = salaService.getSalasFromLocalStorage();
  
  const filmeService = new FilmeService();
  const arrayFilmes: FilmeInterface[] =
  filmeService.getFilmesFromApi();
  
  const sessaoService = new SessaoService();
  const [sessao, setSessao] = useState<SessaoInterface>(new Sessao());
  const [arraySessoes, setSessoes] = useState<SessaoInterface[]>(
    sessaoService.getSessoesFromApi()
  );

  const optFilmes = [];
  for (const filme of arrayFilmes) {
    optFilmes.push(
      <option key={filme.getId()} value={filme.getId()}>
        {filme.getTitulo()}
      </option>
    );
  }

  const optSalas = [];
  for (const sala of arraySalas) {
    optSalas.push(
      <option key={sala.getId()} value={sala.getId()}>
        {sala.getNome()}
      </option>
    );
  }

  return (
    <>
      <div
        className="modal fade"
        id="ModalAdicionarSalaToggle"
        aria-hidden="true"
        aria-labelledby="ModalAdicionarSalaToggleLabel"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5"
                id="ModalAdicionarSalaToggleLabel"
              >
                Adicionar Sessao
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <select
                    id="filmeSelect"
                    className="form-select"
                    onChange={(e) => {
                      const filmeEncontrada = arrayFilmes.find(
                        (filme) => filme.getId() === parseInt(e.target.value)
                      );
                      if (filmeEncontrada) {
                        sessao.setFilme(filmeEncontrada);
                        setSessao(sessao);
                      }
                    } }
                  >
                    <option value="" hidden>
                      Selecione filme
                    </option>
                    {optFilmes}
                  </select>
                </div>
                <div className="mb-3">
                  <select
                    className="form-select"
                    onChange={(e) => {
                      const salaEncontrada = arraySalas.find(
                        (sala) => sala.getId() === parseInt(e.target.value)
                      );
                      if (salaEncontrada) {
                        sessao.setSala(salaEncontrada);
                        setSessao(sessao);
                      }
                    }}
                  >
                    <option value="" hidden>
                      Selecione Sala
                    </option>
                    {optSalas}
                  </select>
                </div>
                <div className="mb-3">
                  <input
                    type={"datetime-local"}
                    className={"form-control"}
                    placeholder={"Data e hora da sessão"}
                    id={"dataHoraSessao"}
                    onChange={(e) => {
                      const dataHora = new Date(e.target.value);
                      sessao.setDataHora(dataHora);
                      setSessao(sessao);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type={"number"}
                    className={"form-control"}
                    placeholder={"Preço da sessão"}
                    id={"precoSessao"}
                    onChange={(e) => {
                      const preco = parseFloat(e.target.value);
                      sessao.setPreco(preco);
                      setSessao(sessao);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type={"text"}
                    className={"form-control"}
                    placeholder={"Idioma da sessão"}
                    id={"idiomaSessao"}
                    onChange={(e) => {
                      sessao.setIdioma(e.target.value);
                      setSessao(sessao);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type={"text"}
                    className={"form-control"}
                    placeholder={"Formato da sessão"}
                    id={"formatoSessao"}
                    onChange={(e) => {
                      sessao.setFormato(e.target.value);
                      setSessao(sessao);
                    }}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <Button
                id={""}
                nome={"Adicionar"}
                classes="btn-primary"
                action={() => {
                  if (
                    sessao.filme.id &&
                    sessao.sala.id &&
                    sessao.dataHora &&
                    sessao.preco &&
                    sessao.idioma &&
                    sessao.formato
                  ) {
                    arraySessoes.push(sessao);
                    sessaoService.setSessoesToLocalStorage(arraySessoes);
                    setSessoes(sessaoService.getSessoesFromApi());
                    setSessao(new Sessao());
                  } else {
                    alert("Preencha todos os campos obrigatórios.");
                  }
                } }
              ></Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h1>Sessões</h1>
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-4">
            <button
              className="btn btn-success"
              data-bs-target="#ModalAdicionarSalaToggle"
              data-bs-toggle="modal"
            >
              Adicionar Sessão
            </button>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="input-group mb-3">
              <Input
                type={"text"}
                classes={"form-control"}
                placeholder={"Digite a sessao"}
                id={"buscaSessao"}
              />
              <Button
                id={"btnBuscarSessao"}
                nome={"Buscar"}
                classes={"btn-primary"}
                action={(): void => {} }
              />
            </div>
          </div>
        </div>
        <div className="col-12 table-responsive">
          <TableSessoes data={arraySessoes} headers={["ID", "Título do filme", "Nome da sala", "Data e hora", "Formato da sessão", "Idioma", "Capacidade", "Ação"]} onDelete={(item) => {
            const updatedSessoes: SessaoInterface[] = arraySessoes.filter(sessao => sessao.getId() != item.getId());
            sessaoService.setSessoesToLocalStorage(updatedSessoes);
            setSessoes(updatedSessoes);
          }} />
        </div>
      </div>
    </>
  );
}

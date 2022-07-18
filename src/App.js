import React, {Component} from 'react';
import './App.css';
import Morango from './img/morango.webp';
import Maca from './img/maca.webp';
import Pera from './img/pera.webp';
import Kiwi from './img/kiwi.webp';
import Mamao from './img/mamao.webp';
import Tangerina from './img/tangerina.webp';

export default class App extends Component{

  state = {
    frutas: [
      {
        id: 1,
        img: Morango,
        nome: "Morango",
        calorias: "30 calorias em 100gr",
        porcaoRecomendada: "1/4 de xícara",
        sobre:"Ajuda a emagrecer pois contém calorias negativas e além disso, é rica em compostos bioativos devido a sua elevada quantidade de vitamina C, folato e compostos fenólicos, que proporcionam efeitos antioxidantes e anti-inflamatórios."
      },
      {
        id: 2,
        img: Maca,
        nome: "Maçã",
        calorias: "56 calorias em 100gr",
        porcaoRecomendada: "1 unidade média de 110gr",
        sobre: "Ajuda a emagrecer pois é rica em antioxidantes como catequinas e ácido clorogênico, além de conter fibras como a quercetina, que ajuda a regular os níveis de açúcar no sangue, a melhorar a digestão e a diminuir os níveis de colesterol e triglicerídeos."
      },
      {
        id: 3,
        img: Pera,
        nome: "Pera",
        calorias: "53 calorias em 100gr",
        porcaoRecomendada: "1/2 unidade ou 110gr",
        sobre: "Ajuda a emagrecer porque é rica em fibras, que ajudam a melhorar o trânsito intestinal e tirar a fome. Ela ainda ajuda a regular os níveis de colesterol no sangue. Peras assadas com canela também são uma ótima sobremesa que, além de deliciosa, ajuda a emagrecer."
      },
      {
        id: 4,
        img: Kiwi,
        nome: "Kiwi",
        calorias: "51 calorias em 100gr",
        porcaoRecomendada: "1 unidade média ou 100gr",
        sobre: "Dentre os benefícios do Kiwi, estão o combate à prisão de ventre e a capacidade de saciar o apetite, ele também é rico em vitamina C, e é diurético."
      },
      {
        id: 5,
        img: Mamao,
        nome: "Mamão",
        calorias: "45 calorias em 100gr",
        porcaoRecomendada: "1 xícara de mamão cortada em cubos ou 220gr",
        sobre: "Diurético e rico em fibras, facilita a eliminação das fezes e combate a barriga inchada. O mamão é bom para ajudar no controle da diabetes e aliviar os sintomas da gastrite."
      },
      {
        id: 6,
        img: Tangerina,
        nome: "Tangerina",
        calorias: "44 calorias em 100gr",
        porcaoRecomendada: "2 unidades pequenas ou 225gr",
        sobre: "Ajuda a emagrecer porque é rica em água e fibras, além de ser pouco calórica. Essa fruta é rica em vitamina C, o que ajuda na absorção do ferro no intestino e fortalece o sistema imune. Suas fibras melhoram o trânsito intestinal, reduzem a absorção de gordura e ajudam a controlar a glicemia. "
      }
    ]
  }

  render(){
    return(
      <>
      <h1>Frutas que emagrecem e suas calorias</h1>
      <section>
        {/* Primeiro tem que mapear o array: */}
        {this.state.frutas.map((item) =>(
          <nav key={item.id} className= "cards">
            <figure className="cards_img">
              <img src={item.img} alt="Fruta"/>
            </figure>        
            <ul className="cards_info">
              <li>Fruta: {item.nome}</li>
              <li>Caloria: {item.calorias}</li>
              <li>Porção recomendada: {item.porcaoRecomendada}</li>
              <li>Sobre: {item.sobre}</li>
            </ul>
          </nav>
      ))}
      </section>
      <p>&copy; Desenvolvido pela aluna Adriana Gutierrez em 07/2022</p>
      </>
    )
  }
}

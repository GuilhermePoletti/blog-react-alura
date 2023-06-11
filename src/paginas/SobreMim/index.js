import style from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpg";


export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={style.subtitulo}>
                Olá, eu sou o Guilherme!
            </h3>

            <img 
                src={fotoSobreMim}
                alt="Foto do Guilherme"
                className={style.fotoSobreMim}
            />

        </PostModelo>               
    )
}
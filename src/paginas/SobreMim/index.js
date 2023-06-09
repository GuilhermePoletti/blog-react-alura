import PostModelo from "componentes/PostModelo";

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
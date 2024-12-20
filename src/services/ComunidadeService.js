import topGame01 from "../assets/images/top-game-01.png";
import topGame02 from "../assets/images/top-game-02.png";
import topGame03 from "../assets/images/top-game-03.jpg";
import topGame04 from "../assets/images/top-game-04.jpg";
import topGame05 from "../assets/images/top-game-05.png";
import topGame06 from "../assets/images/top-game-06.jpg";

class ComunidadeService {
    static getComunidades() {
        return [
            { img: topGame01, participantes: "5.000.000 de participantes", nome: "League Of Legends" },
            { img: topGame02, participantes: "4.000.000 de participantes", nome: "Valorant" },
            { img: topGame03, participantes: "3.000.000 de participantes", nome: "Fortnite" },
            { img: topGame04, participantes: "2.000.000 de participantes", nome: "COD: WARZONE" },
            { img: topGame05, participantes: "1.000.000 de participantes", nome: "CS:GO" },
            { img: topGame06, participantes: "500.000 de participantes", nome: "Rocket League" },
        ];
    }
}

export default ComunidadeService;

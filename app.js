(function () {

    //canvas CONSTSANTS
    const canvas = document.getElementById("canvas-area");
    const ctx = canvas.getContext('2d');
    
    //MATRIX CONSTATS
    const WIDTH_AREA = 30;
    const HEIGHT_AREA = 30;

    let MATRIX_AREA = [];

    const initLifeArea = () => {

        for (let i = 0; i < HEIGHT_AREA; i++) {
            MATRIX_AREA[i] = [];
            for (let j = 0; j < WIDTH_AREA; j++) {
                let opacityG = Math.floor(Math.random() * (94 + 1 - 10 + 1)) + 10;
                MATRIX_AREA[i][j] = opacityG;
            }
        }

    }

    const drawField = () => {

        ctx.clearRect(0, 0, 300, 300);

        for (let i = 0; i < HEIGHT_AREA; i++) {

            for (let j = 0; j < WIDTH_AREA; j++) {
                ctx.fillStyle = `hsl(
                    120,
                    100%,
                    ${MATRIX_AREA[i][j]}%
                )`;

                ctx.fillRect(j * 10, i * 10, 10, 10);

            }

        }

    }

    const sortMatrix = (matrix, i, stop, isWasSortedByWidth) => {

        setTimeout(() => {

            if (i === stop) {

                if (isWasSortedByWidth) return;

                MATRIX_AREA = transpose(MATRIX_AREA);
                drawField();
                sortMatrix(MATRIX_AREA, 0, MATRIX_AREA.length, true);
                return;

            }

            matrix[i].sort();
            MATRIX_AREA = matrix;
            drawField();
            sortMatrix(MATRIX_AREA, ++i, stop, isWasSortedByWidth);

        }, 500);

    }

    const transpose = (a) => {

        var w = a.length || 0;
        var h = a[0] instanceof Array ? a[0].length : 0;

        if (h === 0 || w === 0) return [];

        var i, j, t = [];

        for (i = 0; i < h; i++) {

            t[i] = [];

            for (j = 0; j < w; j++) {

                t[i][j] = a[j][i];
            }
        }

        return t;
    }

    const init = () => {
        initLifeArea();
        drawField();
        sortMatrix(MATRIX_AREA, 0, MATRIX_AREA[0].length, false);

    }

    init();

})()
function func({ width, height, color = 'black' }) {
    console.log(width, height, color);
}

func({ color: 'red', width: 400, height: 500 });
func({ width: 400, height: 500 })

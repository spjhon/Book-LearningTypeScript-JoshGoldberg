// Write your types here! ✨

export type PlaceBase = {
	name: string;
	proximity: number;
	treasure?: string;
};

/*
1. **`export`**: La palabra clave `export` se utiliza aquí para hacer que el tipo `PlaceBase` esté disponible fuera de este archivo. Esto significa que otros archivos TypeScript pueden importar y usar este tipo si lo necesitan.

2. **`type PlaceBase`**: Esto define un nuevo tipo llamado `PlaceBase`.

3. **`{}`**: Los corchetes `{}` encierran el cuerpo del tipo, que define las propiedades del tipo.

4. **`name: string;`**: Esto define una propiedad `name` que debe ser de tipo `string`. Presumiblemente, esta propiedad representa el nombre del lugar.

5. **`proximity: number;`**: Esto define una propiedad `proximity` que debe ser de tipo `number`. Esta propiedad probablemente representa la proximidad o distancia del lugar a algún punto de referencia.

6. **`treasure?: string;`**: Esto define una propiedad opcional `treasure` que puede ser de tipo `string`. La propiedad `treasure` está marcada como opcional gracias al operador `?`. Esto significa que un lugar puede o no tener un tesoro asociado a él. Si está presente, será una cadena que describe el tesoro en ese lugar.

En resumen, el tipo `PlaceBase` define la estructura básica que comparten todos los tipos de lugares en tu aplicación o juego. Cada lugar tiene un nombre (`name`), una proximidad (`proximity`) y opcionalmente puede tener un tesoro (`treasure`). Este tipo proporciona una base común para construir otros tipos de lugares más específicos en tu aplicación.
*/

export type Clearing = PlaceBase & {
	through?: Place;
	type: "clearing";
};

/*
1. **`export type Clearing`**: Esta línea define un nuevo tipo llamado `Clearing` y lo exporta para que esté disponible fuera de este archivo.

2. **`PlaceBase & {}`**: Aquí se utiliza el operador `&` para crear un nuevo tipo que es una intersección entre el tipo `PlaceBase` y un objeto anónimo dentro de los corchetes `{}`. Esto significa que el tipo `Clearing` hereda todas las propiedades de `PlaceBase`, como `name`, `proximity` y `treasure`, además de las propiedades definidas dentro de los corchetes.

3. **`through?: Place;`**: Esta línea define una propiedad opcional llamada `through`, que puede ser de tipo `Place`. La propiedad `through` probablemente indica el lugar a través del cual se puede pasar desde este claro hacia otro lugar. La marca `?` indica que esta propiedad es opcional.

4. **`type: "clearing";`**: Aquí se define una propiedad `type` que debe ser una cadena literal `"clearing"`. Esta propiedad probablemente se utiliza para distinguir el tipo de lugar y proporcionar información adicional sobre el tipo de lugar que es este objeto `Clearing`.

En resumen, el tipo `Clearing` representa un tipo específico de lugar que hereda las propiedades básicas de `PlaceBase` y agrega algunas propiedades adicionales específicas para los claros. Además de tener un nombre, proximidad y opcionalmente un tesoro, un claro también puede tener un lugar `through` que sirve como punto de paso y tiene un tipo específico definido como `"clearing"`.
*/
export type Path = PlaceBase & {
	shortcut?: Place;
	through: Place;
	type: "path";
};

export type Town = PlaceBase & {
	around?: Place;
	through?: Place;
	type: "town";
};

export type StreamBase = PlaceBase & {
	type: "stream";
};

export type StreamEnd = StreamBase & {
	area: "end";
	upstream: Place;
};

export type StreamBegin = StreamBase & {
	area: "begin";
	downstream: Place;
};

export type StreamMiddle = StreamBase & {
	area: "middle";
	downstream: Place;
	upstream: Place;
};

export type Stream = StreamBegin | StreamEnd | StreamMiddle;

export type Place = Clearing | Town | Path | Stream;

let current: Place | undefined = {
	name: "Woesong Bridge",
	proximity: 100,
	through: {
		area: "middle",
		downstream: {
			around: {
				area: "end",
				upstream: {
					name: "Vizima",
					proximity: 30,
					type: "clearing",
				},
				name: "White Orchard Creek",
				proximity: 25,
				type: "stream",
			},
			name: "Oxenfurt Gate",
			proximity: 40,
			through: {
				name: "Vergen Tunnel",
				proximity: 20,
				shortcut: {
					proximity: 30,
					name: "Crow's Perch",
					type: "town",
				},
				through: {
					area: "begin",
					downstream: {
						through: {
							treasure: "rare playing cards",
							name: "Reuven's Treasure",
							proximity: 0,
							type: "clearing",
						},
						name: "Gate of the Hierarch",
						proximity: 10,
						type: "town",
					},
					name: "Founders Stream",
					proximity: 25,
					type: "stream",
				},
				type: "path",
			},
			type: "town",
		},
		name: "Yavina River",
		proximity: 50,
		type: "stream",
		upstream: {
			name: "Merchants' Trail",
			proximity: 65,
			through: {
				name: "Beauclair",
				proximity: 70,
				type: "town",
			},
			type: "path",
		},
	},
	type: "path",
};

let treasure: string | undefined;

while (current) {
	console.log(`At: ${current.name}`);

	switch (current.type) {
		case "clearing":
			current = current.through;
			break;

		case "path":
			current =
				current.shortcut &&
				current.shortcut.proximity < current.through.proximity
					? current.shortcut
					: current.through;
			break;

		case "town":
			if (!current.around) {
				current = current.through;
			} else if (!current.through) {
				current = current.around;
			} else {
				current =
					current.around.proximity < current.through.proximity
						? current.around
						: current.through;
			}
			break;

		case "stream":
			switch (current.area) {
				case "begin":
					current = current.downstream;
					break;

				case "end":
					current = current.upstream;
					break;

				case "middle":
					current =
						current.downstream.proximity < current.upstream.proximity
							? current.downstream
							: current.upstream;
					break;
			}
	}

	if (!current) {
		console.log("Hmm. Dead end.");
	} else if (current.treasure) {
		treasure = current.treasure;
		break;
	}
}

if (treasure) {
	console.log(`This will do nicely: ${treasure}.`);
} else {
	console.log("Nothing going.");
}

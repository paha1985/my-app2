import './App.css';
import styles from './app.module.css';
import { useState } from 'react';

function App() {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');
	const [isValueVaild, setValueVaild] = useState(false);

	const onInputButtonClick = () => {
		let promptValue = prompt('Введите значение:');

		if (promptValue.length >= 3) {
			setValue(promptValue);
			setValueVaild(true);
			setError('');
		} else {
			setError('Введенное значение должно содержать минимум 3 символа');
			setValueVaild(false);
		}
	};

	function onAddButtonClick() {
		if (isValueVaild) {
			setError('');
			setValue('');
			const updatedList = [...list, { id: Date.now(), value: value }];
			setList(updatedList);
			console.log(list);
		}
	}

	return (
		<div className="App">
			<header className="AppHeader">
				<div className={styles.app}>
					<h1 className={styles.pageHeading}>Ввод значения</h1>
					<p className={styles.noMarginText}>
						Текущее значение <code>value</code>: "
						<output className={styles.currentValue}>{value}</output>"
					</p>
					{error !== '' && <div className={styles.error}>{error}</div>}
					<div className={styles.buttonsContainer}>
						<button onClick={onInputButtonClick} className={styles.button}>
							Ввести новое
						</button>
						<button
							onClick={onAddButtonClick}
							className={styles.button}
							disabled={!isValueVaild}
						>
							Добавить в список
						</button>
					</div>
					<div className={styles.listContainer}>
						<h2 className={styles.listHeading}>Список:</h2>
						{list.length === 0 && (
							<p className={styles.noMarginText}>
								Нет добавленных элементов
							</p>
						)}
						{list.length > 0 && (
							<ul className={styles.list}>
								{list.map(({ id, value }) => (
									<li key={id}>{value}</li>
								))}
							</ul>
						)}
					</div>
				</div>
			</header>
		</div>
	);
}

export default App;

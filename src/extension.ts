import * as vscode from 'vscode';

const comboThreshold = 20;
const timeThreshold = 1.5;

const words:string[] = [
	'いいぞ〜',
	'いいぞいいぞ',
	'ふむふむ',
	'こういうの結構難しいんだよな',
	'いいじゃないか',
	'そういうことだよな',
	'うんうん',
	'こういうのでいいんだよ',
	'大正解だ',
	'問答無用のうまさだなあ',
	'素晴らしい',
	'良いセンスしてるなあ',
	'これは良い',
	'心憎いなぁ',
	'うますぎる',
	'最高だ',
];

let combo = 0;
let lastTime = new Date().getTime();

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "inogashiramode" is now active!');

    vscode.workspace.onDidChangeTextDocument(event => {

		let nowTime = new Date().getTime();
		var diffTime = nowTime - lastTime;

		if (diffTime / 1000 < timeThreshold){
			combo++;

			if(combo % comboThreshold === 0){
				vscode.window.showInformationMessage(words[Math.floor(Math.random() * words.length)]);
			}
		} else {
			combo = 0;
		}

		lastTime = nowTime;

	}, null, context.subscriptions);
}

export function deactivate() {
	console.log('"inogashiramode" is now deactive! Thank you for using!');
}

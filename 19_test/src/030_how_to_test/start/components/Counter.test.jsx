/* POINT テストコードを書く際の注意点
Arrage:(テストデータ、条件、環境の設定).
Act:(ロジックの実行、関数の実行).
Assertion:(実行結果と期待する結果の比較).
*/
import { render, screen, fireEvent } from '@testing-library/react'
import Counter from './Counter'

test('「カウントアップ」押下で「現在のカウント」が+1される', () => {
  //Arrage
  render(<Counter originCount={0} />)
  const spanElBeforeUpdate = screen.getByText('現在のカウント:0')
  expect(spanElBeforeUpdate).toBeInTheDocument()
  
  //Act
  const button = screen.getByRole('button', { name: 'カウントアップ'})
  fireEvent.click(button)

  //Assertion
  const spanEl = screen.getByText('現在のカウント:1')
  expect(spanEl).toBeInTheDocument()

});

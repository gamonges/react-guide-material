import { render, screen } from "@testing-library/react";
import Message from "./Message"
import userEvent from "@testing-library/user-event"

describe('Messageコンポーネントの動作確認', () => {
  describe('初期表示の正常確認', () => {
    test('input要素が存在する', () => {
      render(<Message />)
      const inputEl = screen.getByRole('textbox')
      expect(inputEl).toBeInTheDocument()
    })
  })

  describe('画面操作正常性確認', () => {
    test('入力値の変更', async () => {
      render(<Message />)
      const inputEl = screen.getByRole('textbox')

      const user = userEvent.setup()
      await user.type(inputEl, 'Hello')

      expect(inputEl.value).toBe('Hello')
    })

  })
})



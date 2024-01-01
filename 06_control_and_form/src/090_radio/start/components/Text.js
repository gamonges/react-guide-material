const Text = ({ fruit }) => {
  if (fruit.length === 0) {
    return <h3>私の食べたい物はありません</h3>;
  }

  return <h3>私の食べたい者は{fruit}です</h3>;
};

export default Text;

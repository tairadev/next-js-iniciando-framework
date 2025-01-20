module.exports = {
  trailingSlash: true,
  async redirect() {
    return [
      {
        source: '/perguntas',
        destination: '/faq/',
        permanent: true,
      },
    ];
  },
};

export type ConstantsProps = {
  API_URL: string;
};

const constants: ConstantsProps = {
  API_URL: process.env.NEXT_PUBLIC_API_URL || '',
};

export default constants;

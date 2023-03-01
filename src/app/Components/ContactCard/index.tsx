import React, { useState } from 'react';
import styles from './contactCard.module.css';

interface IDataType {
  email: string;
  password: string;
}

const ContentCard = () => {
  const [data, setData] = useState<IDataType>({
    email: '',
    password: '',
  });

  const handleChangeData = (name: string, value: string): void => {
    setData((oldVal) => {
      return {
        ...oldVal,
        [name]: value,
      };
    });
  };

  const handleClickData = (): void => {
    setData({
      email: '',
      password: '',
    });
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <h3>This a fixed contact card</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>

      <form>
        <div>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeData(e.target.name, e.target.value)
            }
            name="email"
            type="email"
            placeholder="Email"
            value={data.email}
          />
          <input
            value={data.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeData(e.target.name, e.target.value)
            }
            name="password"
            type="password"
            placeholder="Password"
          />
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            handleClickData();
          }}
        >
          contact
        </button>
      </form>
    </div>
  );
};

export default ContentCard;

import { Controller, useForm } from 'react-hook-form';

import Button from '_UI/Button/Button';
import CenterContainer from '_UI/CenterContainer/CenterContainer';
import Input from '_UI/Input/Input';
import { StarRating } from '_UI/StarRating';
import API from 'src/api';

import styles from './FeedBackPage.module.scss';

interface FormValues {
  dishesRate: number;
  serviceRate: number;
  comment: string;
  phoneNumber: string;
  reviewerName: string;
}

const FeedBackPage = () => {
  const {
    setValue,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await API.Feedback.createFeedback(data);
      reset({
        comment: '',
        dishesRate: 0,
        phoneNumber: '',
        reviewerName: '',
      });

      alert('Дякуємо за відгук');
    } catch (e) {
      alert('Сталася помилка');
    }
  });

  const handleRatingChange = (
    value: number,
    type: 'dishesRate' | 'serviceRate',
  ) => {
    setValue(type, value);
  };

  return (
    <CenterContainer size="xs" className={styles.container}>
      <h2 className={styles.title}>Задайте питання</h2>
      <p className={styles.text}>
        Якщо у вас є зауваження або пропозиції щодо страв та обслуговування,
        будь ласка, залиште свій відгук.
      </p>
      <form onSubmit={onSubmit}>
        <div className={styles.ratingWrapper}>
          <span>Страви</span>
          <StarRating
            onChange={(val) => {
              handleRatingChange(val, 'dishesRate');
            }}
          />
          <label>{!watch('dishesRate') ? 'Натисніть на зірку' : ''}</label>
        </div>
        <div className={styles.ratingWrapper}>
          <span>Сервіс</span>
          <StarRating
            onChange={(val) => {
              handleRatingChange(val, 'serviceRate');
            }}
          />
          <label>{!watch('serviceRate') ? 'Натисніть на зірку' : ''}</label>
        </div>
        <Controller
          name="comment"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              classNames={styles.input}
              placeholder="Ім'я (необов’язково)"
            />
          )}
        />
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              classNames={styles.input}
              placeholder="Ім'я (необов’язково)"
            />
          )}
        />
        <Controller
          name="reviewerName"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              classNames={styles.input}
              placeholder="Ім'я (необов’язково)"
            />
          )}
        />

        {errors.reviewerName && <span>This field is required</span>}
        <Button type="submit" classNames={styles.submitBtn}>
          Залишити відгук
        </Button>
      </form>
    </CenterContainer>
  );
};

export default FeedBackPage;

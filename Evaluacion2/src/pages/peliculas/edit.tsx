import { Edit, useForm, useSelect } from "@refinedev/antd";
import MDEditor from "@uiw/react-md-editor";
import { Form, Input, Select, InputNumber } from "antd";

// Definir un tipo que represente la estructura de datos de una película
interface MovieData {
  id?: number;
  title?: string;
  year?: number;
  genre?: string[];
  rating?: number;
  director?: string;
  actors?: string[];
  plot?: string;
  poster?: string;
  trailer?: string;
  runtime?: number;
  awards?: string;
  country?: string;
  language?: string;
  boxOffice?: string;
  production?: string;
  website?: string;
}

export const MovieEdit = () => {
  const { formProps, saveButtonProps, queryResult, formLoading } = useForm<MovieData>({});

  const movieData = queryResult?.data; // Assuming the data structure returned from query

  const { selectProps: genreSelectProps } = useSelect({
    resource: "genres",
    defaultValue: movieData?.genre,
    queryOptions: {
      enabled: !!movieData?.genre,
    },
  });

  return (
    <Edit saveButtonProps={saveButtonProps} isLoading={formLoading}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"Title"}
          name={["title"]}
          initialValue={movieData?.title}
          rules={[
            {
              required: true,
              message: 'Please enter the title',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Year"}
          name={["year"]}
          initialValue={movieData?.year}
          rules={[
            {
              required: true,
              type: 'number',
              min: 1888,
              max: new Date().getFullYear(),
              message: 'Please enter a valid year',
            },
          ]}
        >
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          label={"Genre"}
          name={["genre"]}
          initialValue={movieData?.genre}
          rules={[
            {
              required: true,
              message: 'Please select at least one genre',
            },
          ]}
        >
          <Select
            mode="multiple"
            {...genreSelectProps}
          />
        </Form.Item>
        <Form.Item
          label={"Rating"}
          name={["rating"]}
          initialValue={movieData?.rating}
          rules={[
            {
              required: true,
              type: 'number',
              min: 0,
              max: 10,
              message: 'Please enter a valid rating (0-10)',
            },
          ]}
        >
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          label={"Director"}
          name={["director"]}
          initialValue={movieData?.director}
          rules={[
            {
              required: true,
              message: 'Please enter the director',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Actors"}
          name={["actors"]}
          initialValue={movieData?.actors}
          rules={[
            {
              required: true,
              message: 'Please enter at least one actor',
            },
          ]}
        >
          <Select
            mode="tags"
            tokenSeparators={[',']}
            placeholder="Add actors"
          />
        </Form.Item>
        <Form.Item
          label={"Plot"}
          name={["plot"]}
          initialValue={movieData?.plot}
          rules={[
            {
              required: true,
              message: 'Please enter the plot',
            },
          ]}
        >
          <MDEditor data-color-mode="light" />
        </Form.Item>
        <Form.Item
          label={"Poster URL"}
          name={["poster"]}
          initialValue={movieData?.poster}
          rules={[
            {
              required: true,
              message: 'Please enter the poster URL',
            },
            {
              type: 'url',
              message: 'Please enter a valid URL',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Trailer URL"}
          name={["trailer"]}
          initialValue={movieData?.trailer}
          rules={[
            {
              required: true,
              message: 'Please enter the trailer URL',
            },
            {
              type: 'url',
              message: 'Please enter a valid URL',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Runtime (minutes)"}
          name={["runtime"]}
          initialValue={movieData?.runtime}
          rules={[
            {
              required: true,
              type: 'number',
              min: 1,
              message: 'Please enter a valid runtime',
            },
          ]}
        >
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          label={"Awards"}
          name={["awards"]}
          initialValue={movieData?.awards}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Country"}
          name={["country"]}
          initialValue={movieData?.country}
          rules={[
            {
              required: true,
              message: 'Please enter the country',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Language"}
          name={["language"]}
          initialValue={movieData?.language}
          rules={[
            {
              required: true,
              message: 'Please enter the language',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Box Office"}
          name={["boxOffice"]}
          initialValue={movieData?.boxOffice}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Production"}
          name={["production"]}
          initialValue={movieData?.production}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Website"}
          name={["website"]}
          initialValue={movieData?.website}
          rules={[
            {
              type: 'url',
              message: 'Please enter a valid URL',
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Edit>
  );
};

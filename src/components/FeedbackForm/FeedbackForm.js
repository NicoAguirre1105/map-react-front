import React from 'react';
import { useForm } from '@mantine/form';
import { Button, Group } from '@mantine/core';
import { Textarea } from '@mantine/core';


const FeedbackFrom = ({page, title, line}) => {

  const form = useForm({
    initialValues: {
      comment: '',
      page: page,
      title: title,
      line: line
    },
  });


  return (
    <form >
         <Textarea
      size="xl"
      radius="md"
      label="Why do you think the rule didn't work correctly?"
      description="Comment"
      placeholder=""
    />
      <Group justify="flex-end" mt="md">
        <Button type="submit" color="violet" size="md">
          Save
        </Button>
      </Group>
    </form>
  );
};

export default FeedbackFrom;
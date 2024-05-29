import LessonList from "./_comp/lesson-list";
import Container from "./_comp/container";
import H2 from "./_comp/h2";

import { LESSONS } from "./_utils/dummy";
const Management = () => {
  return (
    <main>
      <Container>
        <H2 className="my-7">Construction Management Specialization</H2>
        <div className="px-12">
          <LessonList lessons={LESSONS} />
        </div>
      </Container>
    </main>
  );
};

export default Management;

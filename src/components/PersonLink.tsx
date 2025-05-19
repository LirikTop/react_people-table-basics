import { Link, useParams } from 'react-router-dom';
import { Person } from '../types';
import classNames from 'classnames';

type PersonLinkProps = {
  person: Person;
  getPerson: (name: string) => void;
};

export const PersonLink: React.FC<PersonLinkProps> = ({
  person,
  getPerson,
}) => {
  const { personSlug } = useParams();

  return (
    <tr
      data-cy="person"
      key={person.slug}
      className={classNames({
        'has-background-warning': personSlug === person.slug,
      })}
    >
      <td>
        <Link to={`../${person.slug}`}>{person.name}</Link>
      </td>
      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>
      <td>
        {person.motherName ? (
          <a
            className="has-text-danger"
            onClick={() => getPerson(person.motherName || '')}
          >
            {person.motherName}
          </a>
        ) : (
          '-'
        )}
      </td>
      <td>
        {person.fatherName ? (
          <a onClick={() => getPerson(person.fatherName || '')}>
            {person.fatherName}
          </a>
        ) : (
          '-'
        )}
      </td>
    </tr>
  );
};

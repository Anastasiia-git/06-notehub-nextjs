'use client';

import css from './NotesPage.module.css';
import { useState } from 'react';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { useDebouncedCallback } from 'use-debounce';

import SearchBox from '@/components/SearchBox/SearchBox';
import Pagination from '@/components/Pagination/Pagination';
import NoteList from '@/components/NoteList/NoteList';
import NoteForm from '@/components/NoteForm/NoteForm';
import Modal from '@/components/Modal/Modal';

import { fetchNotes } from '@/lib/api';

export default function App() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['notes', search, page],
    queryFn: () => fetchNotes({ search, page }),
    placeholderData: keepPreviousData,
  });

  const notes = data?.notes ?? [];

  const onChange = useDebouncedCallback((value: string) => {
    setSearch(value);
    setPage(1);
  }, 300);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox value={search} onChange={onChange} />
        {data && data.totalPages > 1 && (
          <Pagination page={page} totalPages={data.totalPages} onPageChange={setPage} />
        )}
        <button onClick={openModal} className={css.button}>
          Create note +
        </button>
      </header>
      {!isLoading && !isError && notes.length > 0 && <NoteList notes={notes} />}
      {modal && (
        <Modal onClose={closeModal}>
          <NoteForm onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
}

-- generated 아이콘 Storage RLS 정책
-- read/list: 누구나 (갤러리 표시용)
drop policy if exists "generated read" on storage.objects;
create policy "generated read"
on storage.objects for select to public
using ( bucket_id = 'icons' and name like 'svg/generated/%' );

-- insert: 로그인(authenticated) + 허용 이메일만 업로드
drop policy if exists "generated insert" on storage.objects;
create policy "generated insert"
on storage.objects for insert to authenticated
with check (
  bucket_id = 'icons' and name like 'svg/generated/%'
  and auth.jwt()->>'email' in ('gunug850@gmail.com')
);

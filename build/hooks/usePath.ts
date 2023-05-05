import path from 'path'

/**
 * 解析路径
 * @param relativePath - 基础路径
 */
export function usePath(relativePath = '') {
  const root = path.resolve(process.cwd())
  const src = `${root}/src`
  const relative = `${root}/${relativePath}`

  return {
    root,
    src,
    relative,
  }
}

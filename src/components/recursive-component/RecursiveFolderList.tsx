import { Icon } from '@iconify/react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Node = {
  name: string;
  nodes?: Node[];
};

export default function FilesystemItem({ node }: { node: Node }) {
  const [isOpen, setIsOpen] = useState(false);

  const getIconName = (name: string): string | null => {
    const extension = name.split('.').pop(); // get the file extension
    switch (extension) {
      case 'html':
        return 'mdi:language-html5';
      case 'css':
        return 'mdi:language-css3';
      case 'js':
        return 'mdi:language-javascript';
      case 'ts':
        return 'mdi:language-typescript';
      case 'json':
        return 'mdi:json';
      case 'tsx':
        return 'tabler:brand-react';
      default:
        return null;
    }
  }

  const iconName = getIconName(node.name);

  return (
    <li key={node.name}>
      <span className="flex items-center gap-1.5 py-1">
        {node.nodes && node.nodes.length > 0 && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 -m-1"
          >
            {/* animation icon */}
            <motion.span
              animate={{
                rotate: isOpen ? 0 : 0,
              }}
              transition={{
                type: 'spring',
                bounce: 0,
                duration: 0.4,
              }}
              className="flex"
            >
              <Icon
                icon="ic:baseline-chevron-right"
                className={`size-4 text-black  ${isOpen ? 'rotate-90' : ''}`}
              />
            </motion.span>
          </button>
        )}

        {node.nodes ? (
          <Icon
            icon="mdi:folder-open"
            color="#009ddc"
            className={`size-6 text-sky-500 ${node.nodes.length === 0 ? 'ml-[22px]' : ''}`}
          />
        ) : (
          <div className="ml-[22px] size-6 text-gray-900">
            {
              iconName && (
                <Icon
                  icon={iconName}
                  className='mr-1'
                  width="24"
                  height="24"
                  color='#485b81'
                />
              )
            }
          </div>
        )}
        {node.name}
      </span>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.5,
            }}
            className="flex flex-col justify-end pl-6 overflow-hidden"
          >
            {node.nodes?.map((node) => (
              <FilesystemItem node={node} key={node.name} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}

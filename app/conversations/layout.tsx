import getConversations from "@/actions/getConversations";
import getUsers from "@/actions/getUsers";
import Sidebar from "@/components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";

interface Props {
  children: React.ReactNode;
}

const ConversationsLayout: React.FC<Props> = async ({ children }) => {
  const conversations = await getConversations();
  const users = await getUsers();

  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList
          users={users}
          title="Messages"
          initialItems={conversations}
        />
        {children}
      </div>
    </Sidebar>
  );
};

export default ConversationsLayout;
